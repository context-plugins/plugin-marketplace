using System.Threading;
using System.Threading.Tasks;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
