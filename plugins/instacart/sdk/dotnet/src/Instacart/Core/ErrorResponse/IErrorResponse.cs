using System.Threading;
using System.Threading.Tasks;
using Instacart.Core.Models;

namespace Instacart.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
