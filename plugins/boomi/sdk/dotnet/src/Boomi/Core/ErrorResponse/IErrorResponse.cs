using System.Threading;
using System.Threading.Tasks;
using Boomi.Core.Models;

namespace Boomi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
