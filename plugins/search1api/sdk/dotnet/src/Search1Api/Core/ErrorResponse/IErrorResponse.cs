using System.Threading;
using System.Threading.Tasks;
using Search1Api.Core.Models;

namespace Search1Api.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
