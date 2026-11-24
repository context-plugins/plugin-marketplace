namespace Basiq.Requests.Connectors;

/// <summary>
/// The inputs of the GetConnectors operation.
/// </summary>
public sealed record GetConnectorsRequest
{
    /// <summary>
    /// Filter parameter can be used to filter connector list by connector property. This parameter should contain a comma-separated list of filter statements.&lt;/br&gt;
    /// A filter statement is composed of the entity name (in this case, it is always 'connector'), the property name (e.g., 'stage'), the filter operator (e.g., 'eq'), and the quoted string value in parentheses (e.g., "('live')").&lt;/br&gt;
    /// The following list of regular expressions describes acceptable filter statements:&lt;/br&gt;
    /// • (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)&lt;/br&gt;
    /// • (connector).(method).(eq)\(('web'||'open-banking'|'pdf'|'csv')\)&lt;/br&gt;
    /// • (connector).(status).(eq|ne)\(('operational'|'degraded-performance'|'partial-outage'|'major-outage'|'under-maintenance')\)&lt;/br&gt;
    /// • (connector).(status).(in)\(([\w\W]+)\)&lt;/br&gt;
    /// • (connector).(stage).(eq|ne)\(('live'|'beta'|'alpha')\)&lt;/br&gt;
    /// • (connector).(stage).(in)\(([\w\W]+)\)&lt;/br&gt;
    /// • (connector).(scopes).(in|eq|ne)\(([\w\W]+)\)&lt;/br&gt;
    /// • (connector).(institution).(country).(eq|ne)\(('Australia'|'New Zealand')\)&lt;/br&gt;
    /// • (connector).(institution).(country).(in)\(([\w\W]+)\)&lt;/br&gt;
    /// • (connector).(institution).(tier).(eq|ne)\(('1'|'2'|'3'|'4')\)&lt;/br&gt;
    /// • (connector).(institution).(tier).(in)\(([\W\d]+)\)&lt;/br&gt;
    /// • (connector).(institution).(type).(eq|ne)\(('Bank'|'Bank (Foreign)'|'Test Bank'|'Credit Union'|'Financial Services'|'Superannuation')\)&lt;/br&gt;
    /// • (connector).(authorization).(type).(eq|ne)\(('user'|'user-mfa'|'user-mfa-intermittent'|'other'|'token')\)&lt;/br&gt;
    /// • (connector).(authorization).(type).(in)\(([\w\W]+)\)&lt;/br&gt;
    /// • (connector).(connectorEngine).(eq|ne)\(('chrome'|'node')\)&lt;/br&gt;
    /// Multiple filter definitions should be separated with a comma (,).&lt;/br&gt;
    /// For example, this filter statement will keep only live tier 1 and tier 2 institutions: filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')&lt;/br&gt;
    /// </summary>
    public string? Filter { get; init; }
}
