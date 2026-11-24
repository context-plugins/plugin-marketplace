using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Stoplight.Core.Hooks;
using Stoplight.Core.Models;

namespace Stoplight.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
