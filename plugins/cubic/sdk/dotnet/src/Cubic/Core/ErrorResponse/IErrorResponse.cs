using System.Threading;
using System.Threading.Tasks;
using Cubic.Core.Models;

namespace Cubic.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
