using System.Threading;
using System.Threading.Tasks;
using Jid.Core.Models;

namespace Jid.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
