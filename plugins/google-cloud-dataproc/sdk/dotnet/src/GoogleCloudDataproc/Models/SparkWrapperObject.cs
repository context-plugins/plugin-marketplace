using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Outer message that contains the data obtained from spark listener, packaged with information that is required to process it.
/// </summary>
public record SparkWrapperObject
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appSummary")]
    public AppSummary? AppSummary { get; init; }

    /// <summary>
    /// Graph representing RDD dependencies. Consists of edges and a root cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rddOperationGraph")]
    public RddOperationGraph? RddOperationGraph { get; init; }

    /// <summary>
    /// Details about executors used by the application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorSummary")]
    public ExecutorSummary? ExecutorSummary { get; init; }

    /// <summary>
    /// Spark Connect Execution Info
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkConnectExecutionInfo")]
    public SparkConnectExecutionInfo1? SparkConnectExecutionInfo { get; init; }

    /// <summary>
    /// Native SQL Execution Info
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nativeSqlExecutionUiData")]
    public NativeSqlExecutionUiData3? NativeSqlExecutionUiData { get; init; }

    /// <summary>
    /// Details about the Environment that the application is running in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationEnvironmentInfo")]
    public ApplicationEnvironmentInfo? ApplicationEnvironmentInfo { get; init; }

    /// <summary>
    /// Stream Block Data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamBlockData")]
    public StreamBlockData? StreamBlockData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamingQueryProgress")]
    public StreamingQueryProgress? StreamingQueryProgress { get; init; }

    /// <summary>
    /// Details of the speculation task when speculative execution is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speculationStageSummary")]
    public SpeculationStageSummary? SpeculationStageSummary { get; init; }

    /// <summary>
    /// Process Summary
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processSummary")]
    public ProcessSummary? ProcessSummary { get; init; }

    /// <summary>
    /// Spark Connect Session Info
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkConnectSessionInfo")]
    public SparkConnectSessionInfo1? SparkConnectSessionInfo { get; init; }

    /// <summary>
    /// Native Build Info
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nativeBuildInfoUiData")]
    public NativeBuildInfoUiData1? NativeBuildInfoUiData { get; init; }

    /// <summary>
    /// Executor resources consumed by a stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorStageSummary")]
    public ExecutorStageSummary? ExecutorStageSummary { get; init; }

    /// <summary>
    /// Data corresponding to a spark job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobData")]
    public JobData? JobData { get; init; }

    /// <summary>
    /// Data corresponding to a stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageData")]
    public StageData? StageData { get; init; }

    /// <summary>
    /// Overall data about RDD storage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rddStorageInfo")]
    public RddStorageInfo? RddStorageInfo { get; init; }

    /// <summary>
    /// A graph used for storing information of an executionPlan of DataFrame.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkPlanGraph")]
    public SparkPlanGraph? SparkPlanGraph { get; init; }

    /// <summary>
    /// Data corresponding to tasks created by spark.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskData")]
    public TaskData? TaskData { get; init; }

    /// <summary>
    /// Application Id created by Spark.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationId")]
    public string? ApplicationId { get; init; }

    /// <summary>
    /// High level information corresponding to an application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationInfo")]
    public ApplicationInfo? ApplicationInfo { get; init; }

    /// <summary>
    /// SQL Execution Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlExecutionUiData")]
    public SqlExecutionUiData? SqlExecutionUiData { get; init; }

    /// <summary>
    /// Streaming
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamingQueryData")]
    public StreamingQueryData? StreamingQueryData { get; init; }

    /// <summary>
    /// Resource profile that contains information about all the resources required by executors and tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceProfileInfo")]
    public ResourceProfileInfo? ResourceProfileInfo { get; init; }

    /// <summary>
    /// VM Timestamp associated with the data object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventTimestamp")]
    public string? EventTimestamp { get; init; }

    /// <summary>
    /// Pool Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("poolData")]
    public PoolData? PoolData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
