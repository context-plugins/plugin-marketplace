using System.Threading;
using System.Threading.Tasks;
using AgentReady.Core.Models;

namespace AgentReady.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
