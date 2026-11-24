using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using ReadMe.Core.Hooks;
using ReadMe.Core.Models;

namespace ReadMe.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
