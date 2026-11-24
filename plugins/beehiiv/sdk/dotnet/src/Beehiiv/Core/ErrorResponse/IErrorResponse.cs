using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core.Models;

namespace Beehiiv.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
