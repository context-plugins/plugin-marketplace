using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Authentication;
using NordicFinancialNews.Core.Authentication.Bearer;

namespace NordicFinancialNews;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(NordicFinancialNewsClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("NORDIC_FINANCIAL_NEWS_BEARER_AUTH"));
    }
}
