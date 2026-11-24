using System;
using System.Collections.Generic;
using System.Linq;
using Apibara.Core.Authentication;
using Apibara.Core.Models;

namespace Apibara.Core.Exceptions;

public sealed class AuthSchemeException(string message, IReadOnlyList<Exception> schemeFailures)
    : SdkException(message, schemeFailures switch
    {
        [] => null,
        [var only] => only,
        _ => new AggregateException(schemeFailures),
    })
{
    public IReadOnlyList<Exception> SchemeFailures { get; } = [.. schemeFailures];

    internal static AuthSchemeException For(CallContext call, string message, IReadOnlyList<Exception> schemeFailures) =>
        new(message, schemeFailures)
        {
            Method = call.Method,
            RequestUri = call.RequestUri,
        };

    internal static AuthSchemeException Failed(
        CallContext call, IReadOnlyList<Exception> schemeFailures, IReadOnlyList<string> unsatisfiedSchemes)
    {
        IReadOnlyList<string> named = [.. unsatisfiedSchemes.Distinct(StringComparer.Ordinal)];
        return For(call, named is []
            ? $"{call} could not be authenticated: no configured scheme succeeded."
            : $"{call} could not be authenticated: no configured scheme succeeded; {named.JoinWith("and")} returned no credential.",
            schemeFailures);
    }

    internal static AuthSchemeException Unsatisfied(CallContext call, IReadOnlyList<string> schemeNames) =>
        For(call, schemeNames is [var only]
            ? $"{call} requires the {only} scheme, but its credential provider returned no credential."
            : $"{call} requires the {schemeNames.JoinWith("or")} schemes, but their credential providers returned no credential.",
            []);

    internal static AuthSchemeException Unconfigured(CallContext call, MissingSchemes missing) =>
        For(call, $"{call} requires {missing}.", []);

    internal static AuthSchemeException Faulted(CallContext call, Exception cause) =>
        For(call, $"{call} could not be authenticated: {cause.Message}", [cause]);
}
