using System.Threading;
using System.Threading.Tasks;
using Applike.Core.Models;

namespace Applike.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
