using System.Threading;
using System.Threading.Tasks;
using Crawl4Ai.Core.Models;

namespace Crawl4Ai.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
