using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Statable.Core.Hooks;
using Statable.Core.Models;

namespace Statable.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
