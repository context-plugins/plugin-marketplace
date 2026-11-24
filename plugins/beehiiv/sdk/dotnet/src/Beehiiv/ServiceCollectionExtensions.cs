using System;
using System.Net.Http;
using Beehiiv.Webhooks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Beehiiv;

public static class ServiceCollectionExtensions
{
    extension(IServiceCollection services)
    {
        public IServiceCollection AddBeehiivClient(Action<BeehiivClientOptions>? configure = null)
        {
            services.AddHttpClient();
            services.AddSingleton(sp =>
            {
                var options = new BeehiivClientOptions
                {
                    TimeProvider = sp.GetService<TimeProvider>() ?? TimeProvider.System,
                };
                configure?.Invoke(options);
                options.Logging =
                    options.Logging with
                    {
                        LoggerFactory = options.Logging.LoggerFactory ?? sp.GetService<ILoggerFactory>()
                    };
                var httpClientFactory = sp.GetRequiredService<IHttpClientFactory>();
                var httpClient = httpClientFactory.CreateClient();
                return new BeehiivClient(httpClient, options);
            });
            return services;
        }

        public IServiceCollection AddBeehiivWebhooks()
        {
            services.AddSingleton(_ => new BeehiivWebhookParser());
            return services;
        }
    }
}
