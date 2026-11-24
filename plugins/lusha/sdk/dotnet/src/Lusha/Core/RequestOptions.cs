using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Lusha.Core.Hooks;
using Lusha.Core.Models;

namespace Lusha.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
