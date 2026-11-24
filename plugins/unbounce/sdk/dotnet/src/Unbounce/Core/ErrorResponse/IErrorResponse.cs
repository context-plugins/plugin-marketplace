using System.Threading;
using System.Threading.Tasks;
using Unbounce.Core.Models;

namespace Unbounce.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
