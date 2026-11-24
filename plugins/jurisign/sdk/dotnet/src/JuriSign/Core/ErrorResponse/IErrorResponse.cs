using System.Threading;
using System.Threading.Tasks;
using JuriSign.Core.Models;

namespace JuriSign.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
