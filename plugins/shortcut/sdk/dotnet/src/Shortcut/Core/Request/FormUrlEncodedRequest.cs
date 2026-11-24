using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using Shortcut.Core.Models;

namespace Shortcut.Core.Request;

internal sealed class FormUrlEncodedRequest : IRequest
{
    private readonly IReadOnlyCollection<Param> _fields;

    private FormUrlEncodedRequest(IReadOnlyCollection<Param> fields) => _fields = fields;

    public HttpContent Get() =>
        new FormUrlEncodedContent([.. _fields.SelectMany(ParameterFlattener.Flatten)
            .Select(field => new KeyValuePair<string, string>(field.Key, field.Text))]);

    public bool CanRetry => true;

    public static FormUrlEncodedRequest Create(params IReadOnlyCollection<Param> fields) => new(fields);
}
