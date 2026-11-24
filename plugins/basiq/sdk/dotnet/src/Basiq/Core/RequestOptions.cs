using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Basiq.Core.Hooks;
using Basiq.Core.Models;

namespace Basiq.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
