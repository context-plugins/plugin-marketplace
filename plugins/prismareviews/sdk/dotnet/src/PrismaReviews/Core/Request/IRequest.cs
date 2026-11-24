using System.Net.Http;

namespace PrismaReviews.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
