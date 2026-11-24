using System.Threading;
using System.Threading.Tasks;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
