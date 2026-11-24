using System.Threading;
using System.Threading.Tasks;
using StayingApi.Core.Models;

namespace StayingApi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
