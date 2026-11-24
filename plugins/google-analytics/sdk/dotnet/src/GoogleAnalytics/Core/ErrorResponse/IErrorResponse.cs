using System.Threading;
using System.Threading.Tasks;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
