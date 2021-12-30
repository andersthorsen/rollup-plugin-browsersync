import { create as createBrowserSync, Options as BrowserSyncOptions } from "browser-sync";
import { NormalizedOutputOptions, OutputPlugin, PluginImpl } from "rollup";

const bs = createBrowserSync('rollup');

function browsersync(browserSyncOptions: BrowserSyncOptions): OutputPlugin {
    return {
        name: 'browsersync',
        writeBundle: function(options: NormalizedOutputOptions): void {
            if (!bs.active) {
                bs.init(browserSyncOptions || {server: '.'});
            } else {
                if (options.file) {
                    bs.reload();
                } else 
                {
                    bs.reload();
                }
            }
        }
    }
};

export = browsersync;