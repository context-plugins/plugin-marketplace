using System.Threading;
using System.Threading.Tasks;
using LastDatabase.Core.Models;

namespace LastDatabase.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
