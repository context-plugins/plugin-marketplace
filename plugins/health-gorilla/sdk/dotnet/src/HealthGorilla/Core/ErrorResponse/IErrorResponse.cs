using System.Threading;
using System.Threading.Tasks;
using HealthGorilla.Core.Models;

namespace HealthGorilla.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
