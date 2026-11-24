using CarsXe.Core;
using CarsXe.Core.Authentication;
using CarsXe.Core.Authentication.ApiKey;

namespace CarsXe;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyQuery { get; }
    public IAuthScheme X402Payment { get; }
    public IAuthScheme RecallsBatchToken { get; }

    public AuthSchemes(CarsXeClientOptions options)
    {
        ApiKeyQuery =
            ApiKeyQueryScheme.Create(
                "ApiKeyQuery",
                "key",
                options.ApiKeyQueryProvider,
                options.ApiKeyQuery ?? EnvironmentVariables.Get("CARS_XE_API_KEY_QUERY"));
        X402Payment =
            ApiKeyHeaderScheme.Create(
                "X402Payment",
                "PAYMENT-SIGNATURE",
                options.X402PaymentProvider,
                options.X402Payment ?? EnvironmentVariables.Get("CARS_XE_X402_PAYMENT"));
        RecallsBatchToken =
            ApiKeyHeaderScheme.Create(
                "RecallsBatchToken",
                "X-CarsXE-Batch-Token",
                options.RecallsBatchTokenProvider,
                options.RecallsBatchToken ?? EnvironmentVariables.Get("CARS_XE_RECALLS_BATCH_TOKEN"));
    }
}
