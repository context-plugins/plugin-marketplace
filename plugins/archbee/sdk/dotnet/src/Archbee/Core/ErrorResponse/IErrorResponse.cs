using System.Threading;
using System.Threading.Tasks;
using Archbee.Core.Models;

namespace Archbee.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
