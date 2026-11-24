using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core.Models;

namespace DevCycle.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
