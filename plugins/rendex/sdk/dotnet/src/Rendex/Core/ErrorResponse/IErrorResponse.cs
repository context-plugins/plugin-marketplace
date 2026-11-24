using System.Threading;
using System.Threading.Tasks;
using Rendex.Core.Models;

namespace Rendex.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
