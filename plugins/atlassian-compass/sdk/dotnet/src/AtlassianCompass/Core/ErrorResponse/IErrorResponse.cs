using System.Threading;
using System.Threading.Tasks;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
