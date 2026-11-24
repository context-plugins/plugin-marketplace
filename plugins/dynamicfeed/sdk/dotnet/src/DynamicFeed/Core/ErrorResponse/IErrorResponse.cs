using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core.Models;

namespace DynamicFeed.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
