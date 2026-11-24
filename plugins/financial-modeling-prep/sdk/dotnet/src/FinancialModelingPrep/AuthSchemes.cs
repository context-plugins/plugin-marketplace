using FinancialModelingPrep.Core;
using FinancialModelingPrep.Core.Authentication;
using FinancialModelingPrep.Core.Authentication.ApiKey;

namespace FinancialModelingPrep;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyQuery { get; }

    public AuthSchemes(FinancialModelingPrepClientOptions options)
    {
        ApiKeyQuery =
            ApiKeyQueryScheme.Create(
                "ApiKeyQuery",
                "apikey",
                options.ApiKeyQueryProvider,
                options.ApiKeyQuery ?? EnvironmentVariables.Get("FINANCIAL_MODELING_PREP_API_KEY_QUERY"));
    }
}
