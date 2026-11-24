using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Ortto.Core.Hooks;
using Ortto.Core.Models;

namespace Ortto.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
