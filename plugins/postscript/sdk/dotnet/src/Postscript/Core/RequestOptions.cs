using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Postscript.Core.Hooks;
using Postscript.Core.Models;

namespace Postscript.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
