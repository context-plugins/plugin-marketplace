using System.Threading;
using System.Threading.Tasks;
using FlowAccount.Core.Models;

namespace FlowAccount.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
