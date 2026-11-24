using System.Threading;
using System.Threading.Tasks;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
