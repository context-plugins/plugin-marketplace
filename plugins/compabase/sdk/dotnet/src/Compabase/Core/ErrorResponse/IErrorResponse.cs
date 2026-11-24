using System.Threading;
using System.Threading.Tasks;
using Compabase.Core.Models;

namespace Compabase.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
