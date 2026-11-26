using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Justtrack.Core.Hooks;
using Justtrack.Core.Models;

namespace Justtrack.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
