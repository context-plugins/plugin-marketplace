using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeDeliverdDevTasksApi>))]
public sealed record TypeDeliverdDevTasksApi : OpenStringEnum<TypeDeliverdDevTasksApi>
{
    private TypeDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly TypeDeliverdDevTasksApi Assessment = new("assessment");

    public static readonly TypeDeliverdDevTasksApi TestResult = new("test_result");

    public static readonly TypeDeliverdDevTasksApi Approval = new("approval");

    public static readonly TypeDeliverdDevTasksApi Decision = new("decision");

    public static readonly TypeDeliverdDevTasksApi Policy = new("policy");

    public static readonly TypeDeliverdDevTasksApi RiskAssessment = new("risk_assessment");

    public static readonly TypeDeliverdDevTasksApi SecurityReview = new("security_review");

    public static readonly TypeDeliverdDevTasksApi PrivacyReview = new("privacy_review");

    public static readonly TypeDeliverdDevTasksApi DataAssessment = new("data_assessment");

    public static readonly TypeDeliverdDevTasksApi ModelEvaluation = new("model_evaluation");

    public static readonly TypeDeliverdDevTasksApi HumanReview = new("human_review");

    public static readonly TypeDeliverdDevTasksApi Incident = new("incident");

    public static readonly TypeDeliverdDevTasksApi Mitigation = new("mitigation");

    public static readonly TypeDeliverdDevTasksApi ExternalDocument = new("external_document");

    public static readonly TypeDeliverdDevTasksApi SystemLog = new("system_log");

    public static readonly TypeDeliverdDevTasksApi ExecutionReceipt = new("execution_receipt");

    public static readonly TypeDeliverdDevTasksApi RedTeam = new("red_team");

    public TResult Match<TResult>(Func<TResult> onAssessment,
        Func<TResult> onTestResult,
        Func<TResult> onApproval,
        Func<TResult> onDecision,
        Func<TResult> onPolicy,
        Func<TResult> onRiskAssessment,
        Func<TResult> onSecurityReview,
        Func<TResult> onPrivacyReview,
        Func<TResult> onDataAssessment,
        Func<TResult> onModelEvaluation,
        Func<TResult> onHumanReview,
        Func<TResult> onIncident,
        Func<TResult> onMitigation,
        Func<TResult> onExternalDocument,
        Func<TResult> onSystemLog,
        Func<TResult> onExecutionReceipt,
        Func<TResult> onRedTeam,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Assessment => onAssessment(),
            _ when this == TestResult => onTestResult(),
            _ when this == Approval => onApproval(),
            _ when this == Decision => onDecision(),
            _ when this == Policy => onPolicy(),
            _ when this == RiskAssessment => onRiskAssessment(),
            _ when this == SecurityReview => onSecurityReview(),
            _ when this == PrivacyReview => onPrivacyReview(),
            _ when this == DataAssessment => onDataAssessment(),
            _ when this == ModelEvaluation => onModelEvaluation(),
            _ when this == HumanReview => onHumanReview(),
            _ when this == Incident => onIncident(),
            _ when this == Mitigation => onMitigation(),
            _ when this == ExternalDocument => onExternalDocument(),
            _ when this == SystemLog => onSystemLog(),
            _ when this == ExecutionReceipt => onExecutionReceipt(),
            _ when this == RedTeam => onRedTeam(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssessment,
        Action onTestResult,
        Action onApproval,
        Action onDecision,
        Action onPolicy,
        Action onRiskAssessment,
        Action onSecurityReview,
        Action onPrivacyReview,
        Action onDataAssessment,
        Action onModelEvaluation,
        Action onHumanReview,
        Action onIncident,
        Action onMitigation,
        Action onExternalDocument,
        Action onSystemLog,
        Action onExecutionReceipt,
        Action onRedTeam,
        Action<string> otherwise)
    {
        if (this == Assessment) onAssessment();
        else if (this == TestResult) onTestResult();
        else if (this == Approval) onApproval();
        else if (this == Decision) onDecision();
        else if (this == Policy) onPolicy();
        else if (this == RiskAssessment) onRiskAssessment();
        else if (this == SecurityReview) onSecurityReview();
        else if (this == PrivacyReview) onPrivacyReview();
        else if (this == DataAssessment) onDataAssessment();
        else if (this == ModelEvaluation) onModelEvaluation();
        else if (this == HumanReview) onHumanReview();
        else if (this == Incident) onIncident();
        else if (this == Mitigation) onMitigation();
        else if (this == ExternalDocument) onExternalDocument();
        else if (this == SystemLog) onSystemLog();
        else if (this == ExecutionReceipt) onExecutionReceipt();
        else if (this == RedTeam) onRedTeam();
        else otherwise(Value);
    }
}
