using System.Threading;
using System.Threading.Tasks;
using RocketReach.Core.Models;

namespace RocketReach.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
