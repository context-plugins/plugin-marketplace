using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Boomi.Core.Hooks;
using Boomi.Core.Models;

namespace Boomi.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
