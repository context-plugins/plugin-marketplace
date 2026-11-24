using System.Threading;
using System.Threading.Tasks;
using SerpApi.Core.Models;

namespace SerpApi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
