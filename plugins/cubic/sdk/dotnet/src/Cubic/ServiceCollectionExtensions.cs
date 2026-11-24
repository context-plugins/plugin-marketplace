using System;
using System.Net.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Cubic;

public static class ServiceCollectionExtensions
{
    extension(IServiceCollection services)
    {
        public IServiceCollection AddCubicClient(Action<CubicClientOptions>? configure = null)
        {
            services.AddHttpClient();
            services.AddSingleton(sp =>
            {
                var options = new CubicClientOptions
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
                return new CubicClient(httpClient, options);
            });
            return services;
        }
    }
}
