using PrismaReviews.Core;
using PrismaReviews.Core.Authentication;
using PrismaReviews.Core.Authentication.Bearer;

namespace PrismaReviews;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(PrismaReviewsClientOptions options)
    {
        ApiKey =
            BearerAuthScheme.Create(
                "ApiKey",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("PRISMA_REVIEWS_API_KEY"));
    }
}
