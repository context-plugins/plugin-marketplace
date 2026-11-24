using System;
using System.Net.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace RelmCrm;

public static class ServiceCollectionExtensions
{
    extension(IServiceCollection services)
    {
        public IServiceCollection AddRelmCrmClient(Action<RelmCrmClientOptions>? configure = null)
        {
            services.AddHttpClient();
            services.AddSingleton(sp =>
            {
                var options = new RelmCrmClientOptions
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
                return new RelmCrmClient(httpClient, options);
            });
            return services;
        }
    }
}
