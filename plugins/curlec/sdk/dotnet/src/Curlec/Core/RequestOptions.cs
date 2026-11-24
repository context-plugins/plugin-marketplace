using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Curlec.Core.Hooks;
using Curlec.Core.Models;

namespace Curlec.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
