using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Asana.Core.Hooks;
using Asana.Core.Models;

namespace Asana.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
