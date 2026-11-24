using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Airtable.Core.Hooks;
using Airtable.Core.Models;

namespace Airtable.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
