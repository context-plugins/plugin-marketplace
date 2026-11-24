using System.Threading;
using System.Threading.Tasks;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
