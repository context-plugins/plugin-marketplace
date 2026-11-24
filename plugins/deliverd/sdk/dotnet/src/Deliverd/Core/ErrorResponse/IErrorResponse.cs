using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core.Models;

namespace Deliverd.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
