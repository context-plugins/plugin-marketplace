using System.Threading;
using System.Threading.Tasks;
using FirefliesAi.Core.Models;

namespace FirefliesAi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
