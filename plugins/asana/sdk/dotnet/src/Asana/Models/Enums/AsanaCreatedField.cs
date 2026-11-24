using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// *Conditional*. A unique identifier to associate this field with the template source of truth.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AsanaCreatedField>))]
public sealed record AsanaCreatedField : OpenStringEnum<AsanaCreatedField>
{
    private AsanaCreatedField(string value) : base(value)
    {
    }

    public static readonly AsanaCreatedField AvRequirements = new("a_v_requirements");

    public static readonly AsanaCreatedField AccountName = new("account_name");

    public static readonly AsanaCreatedField Actionable = new("actionable");

    public static readonly AsanaCreatedField AlignShippingLink = new("align_shipping_link");

    public static readonly AsanaCreatedField AlignStatus = new("align_status");

    public static readonly AsanaCreatedField AllottedTime = new("allotted_time");

    public static readonly AsanaCreatedField Appointment = new("appointment");

    public static readonly AsanaCreatedField ApprovalStage = new("approval_stage");

    public static readonly AsanaCreatedField Approved = new("approved");

    public static readonly AsanaCreatedField ArticleSeries = new("article_series");

    public static readonly AsanaCreatedField BoardCommittee = new("board_committee");

    public static readonly AsanaCreatedField Browser = new("browser");

    public static readonly AsanaCreatedField CampaignAudience = new("campaign_audience");

    public static readonly AsanaCreatedField CampaignProjectStatus = new("campaign_project_status");

    public static readonly AsanaCreatedField CampaignRegions = new("campaign_regions");

    public static readonly AsanaCreatedField ChannelPrimary = new("channel_primary");

    public static readonly AsanaCreatedField ClientTopicType = new("client_topic_type");

    public static readonly AsanaCreatedField CompleteBy = new("complete_by");

    public static readonly AsanaCreatedField Contact = new("contact");

    public static readonly AsanaCreatedField ContactEmailAddress = new("contact_email_address");

    public static readonly AsanaCreatedField ContentChannels = new("content_channels");

    public static readonly AsanaCreatedField ContentChannelsNeeded = new("content_channels_needed");

    public static readonly AsanaCreatedField ContentStage = new("content_stage");

    public static readonly AsanaCreatedField ContentType = new("content_type");

    public static readonly AsanaCreatedField Contract = new("contract");

    public static readonly AsanaCreatedField ContractStatus = new("contract_status");

    public static readonly AsanaCreatedField Cost = new("cost");

    public static readonly AsanaCreatedField CreationStage = new("creation_stage");

    public static readonly AsanaCreatedField CreativeChannel = new("creative_channel");

    public static readonly AsanaCreatedField CreativeNeeded = new("creative_needed");

    public static readonly AsanaCreatedField CreativeNeeds = new("creative_needs");

    public static readonly AsanaCreatedField DataSensitivity = new("data_sensitivity");

    public static readonly AsanaCreatedField DealSize = new("deal_size");

    public static readonly AsanaCreatedField DeliveryAppt = new("delivery_appt");

    public static readonly AsanaCreatedField DeliveryApptDate = new("delivery_appt_date");

    public static readonly AsanaCreatedField Department = new("department");

    public static readonly AsanaCreatedField DepartmentResponsible = new("department_responsible");

    public static readonly AsanaCreatedField DesignRequestNeeded = new("design_request_needed");

    public static readonly AsanaCreatedField DesignRequestType = new("design_request_type");

    public static readonly AsanaCreatedField DiscussionCategory = new("discussion_category");

    public static readonly AsanaCreatedField DoThisTask = new("do_this_task");

    public static readonly AsanaCreatedField EditorialContentStatus = new("editorial_content_status");

    public static readonly AsanaCreatedField EditorialContentTag = new("editorial_content_tag");

    public static readonly AsanaCreatedField EditorialContentType = new("editorial_content_type");

    public static readonly AsanaCreatedField Effort = new("effort");

    public static readonly AsanaCreatedField EffortLevel = new("effort_level");

    public static readonly AsanaCreatedField EstCompletionDate = new("est_completion_date");

    public static readonly AsanaCreatedField EstimatedTime = new("estimated_time");

    public static readonly AsanaCreatedField EstimatedValue = new("estimated_value");

    public static readonly AsanaCreatedField ExpectedCost = new("expected_cost");

    public static readonly AsanaCreatedField ExternalStepsNeeded = new("external_steps_needed");

    public static readonly AsanaCreatedField FavoriteIdea = new("favorite_idea");

    public static readonly AsanaCreatedField FeedbackType = new("feedback_type");

    public static readonly AsanaCreatedField Financial = new("financial");

    public static readonly AsanaCreatedField FundingAmount = new("funding_amount");

    public static readonly AsanaCreatedField GrantApplicationProcess = new("grant_application_process");

    public static readonly AsanaCreatedField HiringCandidateStatus = new("hiring_candidate_status");

    public static readonly AsanaCreatedField IdeaStatus = new("idea_status");

    public static readonly AsanaCreatedField IdsLink = new("ids_link");

    public static readonly AsanaCreatedField IdsPatientLink = new("ids_patient_link");

    public static readonly AsanaCreatedField ImplementationStage = new("implementation_stage");

    public static readonly AsanaCreatedField Insurance = new("insurance");

    public static readonly AsanaCreatedField InterviewArea = new("interview_area");

    public static readonly AsanaCreatedField InterviewQuestionScore = new("interview_question_score");

    public static readonly AsanaCreatedField IteroScanLink = new("itero_scan_link");

    public static readonly AsanaCreatedField JobSAppliedTo = new("job_s_applied_to");

    public static readonly AsanaCreatedField Lab = new("lab");

    public static readonly AsanaCreatedField LaunchStatus = new("launch_status");

    public static readonly AsanaCreatedField LeadStatus = new("lead_status");

    public static readonly AsanaCreatedField LocalizationLanguage = new("localization_language");

    public static readonly AsanaCreatedField LocalizationMarketTeam = new("localization_market_team");

    public static readonly AsanaCreatedField LocalizationStatus = new("localization_status");

    public static readonly AsanaCreatedField MeetingMinutes = new("meeting_minutes");

    public static readonly AsanaCreatedField MeetingNeeded = new("meeting_needed");

    public static readonly AsanaCreatedField Minutes = new("minutes");

    public static readonly AsanaCreatedField Mrr = new("mrr");

    public static readonly AsanaCreatedField MustLocalize = new("must_localize");

    public static readonly AsanaCreatedField NameOfFoundation = new("name_of_foundation");

    public static readonly AsanaCreatedField NeedToFollowUp = new("need_to_follow_up");

    public static readonly AsanaCreatedField NextAppointment = new("next_appointment");

    public static readonly AsanaCreatedField NextStepsSales = new("next_steps_sales");

    public static readonly AsanaCreatedField NumPeople = new("num_people");

    public static readonly AsanaCreatedField NumberOfUserReports = new("number_of_user_reports");

    public static readonly AsanaCreatedField OfficeLocation = new("office_location");

    public static readonly AsanaCreatedField OnboardingActivity = new("onboarding_activity");

    public static readonly AsanaCreatedField Owner = new("owner");

    public static readonly AsanaCreatedField ParticipantsNeeded = new("participants_needed");

    public static readonly AsanaCreatedField PatientDateOfBirth = new("patient_date_of_birth");

    public static readonly AsanaCreatedField PatientEmail = new("patient_email");

    public static readonly AsanaCreatedField PatientPhone = new("patient_phone");

    public static readonly AsanaCreatedField PatientStatus = new("patient_status");

    public static readonly AsanaCreatedField PhoneNumber = new("phone_number");

    public static readonly AsanaCreatedField PlanningCategory = new("planning_category");

    public static readonly AsanaCreatedField PointOfContact = new("point_of_contact");

    public static readonly AsanaCreatedField Position = new("position");

    public static readonly AsanaCreatedField PostFormat = new("post_format");

    public static readonly AsanaCreatedField Prescription = new("prescription");

    public static readonly AsanaCreatedField Priority = new("priority");

    public static readonly AsanaCreatedField PriorityLevel = new("priority_level");

    public static readonly AsanaCreatedField Product = new("product");

    public static readonly AsanaCreatedField ProductStage = new("product_stage");

    public static readonly AsanaCreatedField Progress = new("progress");

    public static readonly AsanaCreatedField ProjectSize = new("project_size");

    public static readonly AsanaCreatedField ProjectStatus = new("project_status");

    public static readonly AsanaCreatedField ProposedBudget = new("proposed_budget");

    public static readonly AsanaCreatedField PublishStatus = new("publish_status");

    public static readonly AsanaCreatedField ReasonForScan = new("reason_for_scan");

    public static readonly AsanaCreatedField Referral = new("referral");

    public static readonly AsanaCreatedField RequestType = new("request_type");

    public static readonly AsanaCreatedField ResearchStatus = new("research_status");

    public static readonly AsanaCreatedField ResponsibleDepartment = new("responsible_department");

    public static readonly AsanaCreatedField ResponsibleTeam = new("responsible_team");

    public static readonly AsanaCreatedField RiskAssessmentStatus = new("risk_assessment_status");

    public static readonly AsanaCreatedField RoomName = new("room_name");

    public static readonly AsanaCreatedField SalesCounterpart = new("sales_counterpart");

    public static readonly AsanaCreatedField Sentiment = new("sentiment");

    public static readonly AsanaCreatedField ShippingLink = new("shipping_link");

    public static readonly AsanaCreatedField SocialChannels = new("social_channels");

    public static readonly AsanaCreatedField Stage = new("stage");

    public static readonly AsanaCreatedField Status = new("status");

    public static readonly AsanaCreatedField StatusDesign = new("status_design");

    public static readonly AsanaCreatedField StatusOfInitiative = new("status_of_initiative");

    public static readonly AsanaCreatedField SystemSetup = new("system_setup");

    public static readonly AsanaCreatedField TaskProgress = new("task_progress");

    public static readonly AsanaCreatedField Team = new("team");

    public static readonly AsanaCreatedField TeamMarketing = new("team_marketing");

    public static readonly AsanaCreatedField TeamResponsible = new("team_responsible");

    public static readonly AsanaCreatedField TimeItTakesToCompleteTasks = new("time_it_takes_to_complete_tasks");

    public static readonly AsanaCreatedField Timeframe = new("timeframe");

    public static readonly AsanaCreatedField TreatmentType = new("treatment_type");

    public static readonly AsanaCreatedField TypeWorkRequestsIt = new("type_work_requests_it");

    public static readonly AsanaCreatedField UseAgency = new("use_agency");

    public static readonly AsanaCreatedField UserName = new("user_name");

    public static readonly AsanaCreatedField VendorCategory = new("vendor_category");

    public static readonly AsanaCreatedField VendorType = new("vendor_type");

    public static readonly AsanaCreatedField WordCount = new("word_count");

    public TResult Match<TResult>(Func<TResult> onAvRequirements,
        Func<TResult> onAccountName,
        Func<TResult> onActionable,
        Func<TResult> onAlignShippingLink,
        Func<TResult> onAlignStatus,
        Func<TResult> onAllottedTime,
        Func<TResult> onAppointment,
        Func<TResult> onApprovalStage,
        Func<TResult> onApproved,
        Func<TResult> onArticleSeries,
        Func<TResult> onBoardCommittee,
        Func<TResult> onBrowser,
        Func<TResult> onCampaignAudience,
        Func<TResult> onCampaignProjectStatus,
        Func<TResult> onCampaignRegions,
        Func<TResult> onChannelPrimary,
        Func<TResult> onClientTopicType,
        Func<TResult> onCompleteBy,
        Func<TResult> onContact,
        Func<TResult> onContactEmailAddress,
        Func<TResult> onContentChannels,
        Func<TResult> onContentChannelsNeeded,
        Func<TResult> onContentStage,
        Func<TResult> onContentType,
        Func<TResult> onContract,
        Func<TResult> onContractStatus,
        Func<TResult> onCost,
        Func<TResult> onCreationStage,
        Func<TResult> onCreativeChannel,
        Func<TResult> onCreativeNeeded,
        Func<TResult> onCreativeNeeds,
        Func<TResult> onDataSensitivity,
        Func<TResult> onDealSize,
        Func<TResult> onDeliveryAppt,
        Func<TResult> onDeliveryApptDate,
        Func<TResult> onDepartment,
        Func<TResult> onDepartmentResponsible,
        Func<TResult> onDesignRequestNeeded,
        Func<TResult> onDesignRequestType,
        Func<TResult> onDiscussionCategory,
        Func<TResult> onDoThisTask,
        Func<TResult> onEditorialContentStatus,
        Func<TResult> onEditorialContentTag,
        Func<TResult> onEditorialContentType,
        Func<TResult> onEffort,
        Func<TResult> onEffortLevel,
        Func<TResult> onEstCompletionDate,
        Func<TResult> onEstimatedTime,
        Func<TResult> onEstimatedValue,
        Func<TResult> onExpectedCost,
        Func<TResult> onExternalStepsNeeded,
        Func<TResult> onFavoriteIdea,
        Func<TResult> onFeedbackType,
        Func<TResult> onFinancial,
        Func<TResult> onFundingAmount,
        Func<TResult> onGrantApplicationProcess,
        Func<TResult> onHiringCandidateStatus,
        Func<TResult> onIdeaStatus,
        Func<TResult> onIdsLink,
        Func<TResult> onIdsPatientLink,
        Func<TResult> onImplementationStage,
        Func<TResult> onInsurance,
        Func<TResult> onInterviewArea,
        Func<TResult> onInterviewQuestionScore,
        Func<TResult> onIteroScanLink,
        Func<TResult> onJobSAppliedTo,
        Func<TResult> onLab,
        Func<TResult> onLaunchStatus,
        Func<TResult> onLeadStatus,
        Func<TResult> onLocalizationLanguage,
        Func<TResult> onLocalizationMarketTeam,
        Func<TResult> onLocalizationStatus,
        Func<TResult> onMeetingMinutes,
        Func<TResult> onMeetingNeeded,
        Func<TResult> onMinutes,
        Func<TResult> onMrr,
        Func<TResult> onMustLocalize,
        Func<TResult> onNameOfFoundation,
        Func<TResult> onNeedToFollowUp,
        Func<TResult> onNextAppointment,
        Func<TResult> onNextStepsSales,
        Func<TResult> onNumPeople,
        Func<TResult> onNumberOfUserReports,
        Func<TResult> onOfficeLocation,
        Func<TResult> onOnboardingActivity,
        Func<TResult> onOwner,
        Func<TResult> onParticipantsNeeded,
        Func<TResult> onPatientDateOfBirth,
        Func<TResult> onPatientEmail,
        Func<TResult> onPatientPhone,
        Func<TResult> onPatientStatus,
        Func<TResult> onPhoneNumber,
        Func<TResult> onPlanningCategory,
        Func<TResult> onPointOfContact,
        Func<TResult> onPosition,
        Func<TResult> onPostFormat,
        Func<TResult> onPrescription,
        Func<TResult> onPriority,
        Func<TResult> onPriorityLevel,
        Func<TResult> onProduct,
        Func<TResult> onProductStage,
        Func<TResult> onProgress,
        Func<TResult> onProjectSize,
        Func<TResult> onProjectStatus,
        Func<TResult> onProposedBudget,
        Func<TResult> onPublishStatus,
        Func<TResult> onReasonForScan,
        Func<TResult> onReferral,
        Func<TResult> onRequestType,
        Func<TResult> onResearchStatus,
        Func<TResult> onResponsibleDepartment,
        Func<TResult> onResponsibleTeam,
        Func<TResult> onRiskAssessmentStatus,
        Func<TResult> onRoomName,
        Func<TResult> onSalesCounterpart,
        Func<TResult> onSentiment,
        Func<TResult> onShippingLink,
        Func<TResult> onSocialChannels,
        Func<TResult> onStage,
        Func<TResult> onStatus,
        Func<TResult> onStatusDesign,
        Func<TResult> onStatusOfInitiative,
        Func<TResult> onSystemSetup,
        Func<TResult> onTaskProgress,
        Func<TResult> onTeam,
        Func<TResult> onTeamMarketing,
        Func<TResult> onTeamResponsible,
        Func<TResult> onTimeItTakesToCompleteTasks,
        Func<TResult> onTimeframe,
        Func<TResult> onTreatmentType,
        Func<TResult> onTypeWorkRequestsIt,
        Func<TResult> onUseAgency,
        Func<TResult> onUserName,
        Func<TResult> onVendorCategory,
        Func<TResult> onVendorType,
        Func<TResult> onWordCount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AvRequirements => onAvRequirements(),
            _ when this == AccountName => onAccountName(),
            _ when this == Actionable => onActionable(),
            _ when this == AlignShippingLink => onAlignShippingLink(),
            _ when this == AlignStatus => onAlignStatus(),
            _ when this == AllottedTime => onAllottedTime(),
            _ when this == Appointment => onAppointment(),
            _ when this == ApprovalStage => onApprovalStage(),
            _ when this == Approved => onApproved(),
            _ when this == ArticleSeries => onArticleSeries(),
            _ when this == BoardCommittee => onBoardCommittee(),
            _ when this == Browser => onBrowser(),
            _ when this == CampaignAudience => onCampaignAudience(),
            _ when this == CampaignProjectStatus => onCampaignProjectStatus(),
            _ when this == CampaignRegions => onCampaignRegions(),
            _ when this == ChannelPrimary => onChannelPrimary(),
            _ when this == ClientTopicType => onClientTopicType(),
            _ when this == CompleteBy => onCompleteBy(),
            _ when this == Contact => onContact(),
            _ when this == ContactEmailAddress => onContactEmailAddress(),
            _ when this == ContentChannels => onContentChannels(),
            _ when this == ContentChannelsNeeded => onContentChannelsNeeded(),
            _ when this == ContentStage => onContentStage(),
            _ when this == ContentType => onContentType(),
            _ when this == Contract => onContract(),
            _ when this == ContractStatus => onContractStatus(),
            _ when this == Cost => onCost(),
            _ when this == CreationStage => onCreationStage(),
            _ when this == CreativeChannel => onCreativeChannel(),
            _ when this == CreativeNeeded => onCreativeNeeded(),
            _ when this == CreativeNeeds => onCreativeNeeds(),
            _ when this == DataSensitivity => onDataSensitivity(),
            _ when this == DealSize => onDealSize(),
            _ when this == DeliveryAppt => onDeliveryAppt(),
            _ when this == DeliveryApptDate => onDeliveryApptDate(),
            _ when this == Department => onDepartment(),
            _ when this == DepartmentResponsible => onDepartmentResponsible(),
            _ when this == DesignRequestNeeded => onDesignRequestNeeded(),
            _ when this == DesignRequestType => onDesignRequestType(),
            _ when this == DiscussionCategory => onDiscussionCategory(),
            _ when this == DoThisTask => onDoThisTask(),
            _ when this == EditorialContentStatus => onEditorialContentStatus(),
            _ when this == EditorialContentTag => onEditorialContentTag(),
            _ when this == EditorialContentType => onEditorialContentType(),
            _ when this == Effort => onEffort(),
            _ when this == EffortLevel => onEffortLevel(),
            _ when this == EstCompletionDate => onEstCompletionDate(),
            _ when this == EstimatedTime => onEstimatedTime(),
            _ when this == EstimatedValue => onEstimatedValue(),
            _ when this == ExpectedCost => onExpectedCost(),
            _ when this == ExternalStepsNeeded => onExternalStepsNeeded(),
            _ when this == FavoriteIdea => onFavoriteIdea(),
            _ when this == FeedbackType => onFeedbackType(),
            _ when this == Financial => onFinancial(),
            _ when this == FundingAmount => onFundingAmount(),
            _ when this == GrantApplicationProcess => onGrantApplicationProcess(),
            _ when this == HiringCandidateStatus => onHiringCandidateStatus(),
            _ when this == IdeaStatus => onIdeaStatus(),
            _ when this == IdsLink => onIdsLink(),
            _ when this == IdsPatientLink => onIdsPatientLink(),
            _ when this == ImplementationStage => onImplementationStage(),
            _ when this == Insurance => onInsurance(),
            _ when this == InterviewArea => onInterviewArea(),
            _ when this == InterviewQuestionScore => onInterviewQuestionScore(),
            _ when this == IteroScanLink => onIteroScanLink(),
            _ when this == JobSAppliedTo => onJobSAppliedTo(),
            _ when this == Lab => onLab(),
            _ when this == LaunchStatus => onLaunchStatus(),
            _ when this == LeadStatus => onLeadStatus(),
            _ when this == LocalizationLanguage => onLocalizationLanguage(),
            _ when this == LocalizationMarketTeam => onLocalizationMarketTeam(),
            _ when this == LocalizationStatus => onLocalizationStatus(),
            _ when this == MeetingMinutes => onMeetingMinutes(),
            _ when this == MeetingNeeded => onMeetingNeeded(),
            _ when this == Minutes => onMinutes(),
            _ when this == Mrr => onMrr(),
            _ when this == MustLocalize => onMustLocalize(),
            _ when this == NameOfFoundation => onNameOfFoundation(),
            _ when this == NeedToFollowUp => onNeedToFollowUp(),
            _ when this == NextAppointment => onNextAppointment(),
            _ when this == NextStepsSales => onNextStepsSales(),
            _ when this == NumPeople => onNumPeople(),
            _ when this == NumberOfUserReports => onNumberOfUserReports(),
            _ when this == OfficeLocation => onOfficeLocation(),
            _ when this == OnboardingActivity => onOnboardingActivity(),
            _ when this == Owner => onOwner(),
            _ when this == ParticipantsNeeded => onParticipantsNeeded(),
            _ when this == PatientDateOfBirth => onPatientDateOfBirth(),
            _ when this == PatientEmail => onPatientEmail(),
            _ when this == PatientPhone => onPatientPhone(),
            _ when this == PatientStatus => onPatientStatus(),
            _ when this == PhoneNumber => onPhoneNumber(),
            _ when this == PlanningCategory => onPlanningCategory(),
            _ when this == PointOfContact => onPointOfContact(),
            _ when this == Position => onPosition(),
            _ when this == PostFormat => onPostFormat(),
            _ when this == Prescription => onPrescription(),
            _ when this == Priority => onPriority(),
            _ when this == PriorityLevel => onPriorityLevel(),
            _ when this == Product => onProduct(),
            _ when this == ProductStage => onProductStage(),
            _ when this == Progress => onProgress(),
            _ when this == ProjectSize => onProjectSize(),
            _ when this == ProjectStatus => onProjectStatus(),
            _ when this == ProposedBudget => onProposedBudget(),
            _ when this == PublishStatus => onPublishStatus(),
            _ when this == ReasonForScan => onReasonForScan(),
            _ when this == Referral => onReferral(),
            _ when this == RequestType => onRequestType(),
            _ when this == ResearchStatus => onResearchStatus(),
            _ when this == ResponsibleDepartment => onResponsibleDepartment(),
            _ when this == ResponsibleTeam => onResponsibleTeam(),
            _ when this == RiskAssessmentStatus => onRiskAssessmentStatus(),
            _ when this == RoomName => onRoomName(),
            _ when this == SalesCounterpart => onSalesCounterpart(),
            _ when this == Sentiment => onSentiment(),
            _ when this == ShippingLink => onShippingLink(),
            _ when this == SocialChannels => onSocialChannels(),
            _ when this == Stage => onStage(),
            _ when this == Status => onStatus(),
            _ when this == StatusDesign => onStatusDesign(),
            _ when this == StatusOfInitiative => onStatusOfInitiative(),
            _ when this == SystemSetup => onSystemSetup(),
            _ when this == TaskProgress => onTaskProgress(),
            _ when this == Team => onTeam(),
            _ when this == TeamMarketing => onTeamMarketing(),
            _ when this == TeamResponsible => onTeamResponsible(),
            _ when this == TimeItTakesToCompleteTasks => onTimeItTakesToCompleteTasks(),
            _ when this == Timeframe => onTimeframe(),
            _ when this == TreatmentType => onTreatmentType(),
            _ when this == TypeWorkRequestsIt => onTypeWorkRequestsIt(),
            _ when this == UseAgency => onUseAgency(),
            _ when this == UserName => onUserName(),
            _ when this == VendorCategory => onVendorCategory(),
            _ when this == VendorType => onVendorType(),
            _ when this == WordCount => onWordCount(),
            _ => otherwise(Value)
        };

    public void Match(Action onAvRequirements,
        Action onAccountName,
        Action onActionable,
        Action onAlignShippingLink,
        Action onAlignStatus,
        Action onAllottedTime,
        Action onAppointment,
        Action onApprovalStage,
        Action onApproved,
        Action onArticleSeries,
        Action onBoardCommittee,
        Action onBrowser,
        Action onCampaignAudience,
        Action onCampaignProjectStatus,
        Action onCampaignRegions,
        Action onChannelPrimary,
        Action onClientTopicType,
        Action onCompleteBy,
        Action onContact,
        Action onContactEmailAddress,
        Action onContentChannels,
        Action onContentChannelsNeeded,
        Action onContentStage,
        Action onContentType,
        Action onContract,
        Action onContractStatus,
        Action onCost,
        Action onCreationStage,
        Action onCreativeChannel,
        Action onCreativeNeeded,
        Action onCreativeNeeds,
        Action onDataSensitivity,
        Action onDealSize,
        Action onDeliveryAppt,
        Action onDeliveryApptDate,
        Action onDepartment,
        Action onDepartmentResponsible,
        Action onDesignRequestNeeded,
        Action onDesignRequestType,
        Action onDiscussionCategory,
        Action onDoThisTask,
        Action onEditorialContentStatus,
        Action onEditorialContentTag,
        Action onEditorialContentType,
        Action onEffort,
        Action onEffortLevel,
        Action onEstCompletionDate,
        Action onEstimatedTime,
        Action onEstimatedValue,
        Action onExpectedCost,
        Action onExternalStepsNeeded,
        Action onFavoriteIdea,
        Action onFeedbackType,
        Action onFinancial,
        Action onFundingAmount,
        Action onGrantApplicationProcess,
        Action onHiringCandidateStatus,
        Action onIdeaStatus,
        Action onIdsLink,
        Action onIdsPatientLink,
        Action onImplementationStage,
        Action onInsurance,
        Action onInterviewArea,
        Action onInterviewQuestionScore,
        Action onIteroScanLink,
        Action onJobSAppliedTo,
        Action onLab,
        Action onLaunchStatus,
        Action onLeadStatus,
        Action onLocalizationLanguage,
        Action onLocalizationMarketTeam,
        Action onLocalizationStatus,
        Action onMeetingMinutes,
        Action onMeetingNeeded,
        Action onMinutes,
        Action onMrr,
        Action onMustLocalize,
        Action onNameOfFoundation,
        Action onNeedToFollowUp,
        Action onNextAppointment,
        Action onNextStepsSales,
        Action onNumPeople,
        Action onNumberOfUserReports,
        Action onOfficeLocation,
        Action onOnboardingActivity,
        Action onOwner,
        Action onParticipantsNeeded,
        Action onPatientDateOfBirth,
        Action onPatientEmail,
        Action onPatientPhone,
        Action onPatientStatus,
        Action onPhoneNumber,
        Action onPlanningCategory,
        Action onPointOfContact,
        Action onPosition,
        Action onPostFormat,
        Action onPrescription,
        Action onPriority,
        Action onPriorityLevel,
        Action onProduct,
        Action onProductStage,
        Action onProgress,
        Action onProjectSize,
        Action onProjectStatus,
        Action onProposedBudget,
        Action onPublishStatus,
        Action onReasonForScan,
        Action onReferral,
        Action onRequestType,
        Action onResearchStatus,
        Action onResponsibleDepartment,
        Action onResponsibleTeam,
        Action onRiskAssessmentStatus,
        Action onRoomName,
        Action onSalesCounterpart,
        Action onSentiment,
        Action onShippingLink,
        Action onSocialChannels,
        Action onStage,
        Action onStatus,
        Action onStatusDesign,
        Action onStatusOfInitiative,
        Action onSystemSetup,
        Action onTaskProgress,
        Action onTeam,
        Action onTeamMarketing,
        Action onTeamResponsible,
        Action onTimeItTakesToCompleteTasks,
        Action onTimeframe,
        Action onTreatmentType,
        Action onTypeWorkRequestsIt,
        Action onUseAgency,
        Action onUserName,
        Action onVendorCategory,
        Action onVendorType,
        Action onWordCount,
        Action<string> otherwise)
    {
        if (this == AvRequirements) onAvRequirements();
        else if (this == AccountName) onAccountName();
        else if (this == Actionable) onActionable();
        else if (this == AlignShippingLink) onAlignShippingLink();
        else if (this == AlignStatus) onAlignStatus();
        else if (this == AllottedTime) onAllottedTime();
        else if (this == Appointment) onAppointment();
        else if (this == ApprovalStage) onApprovalStage();
        else if (this == Approved) onApproved();
        else if (this == ArticleSeries) onArticleSeries();
        else if (this == BoardCommittee) onBoardCommittee();
        else if (this == Browser) onBrowser();
        else if (this == CampaignAudience) onCampaignAudience();
        else if (this == CampaignProjectStatus) onCampaignProjectStatus();
        else if (this == CampaignRegions) onCampaignRegions();
        else if (this == ChannelPrimary) onChannelPrimary();
        else if (this == ClientTopicType) onClientTopicType();
        else if (this == CompleteBy) onCompleteBy();
        else if (this == Contact) onContact();
        else if (this == ContactEmailAddress) onContactEmailAddress();
        else if (this == ContentChannels) onContentChannels();
        else if (this == ContentChannelsNeeded) onContentChannelsNeeded();
        else if (this == ContentStage) onContentStage();
        else if (this == ContentType) onContentType();
        else if (this == Contract) onContract();
        else if (this == ContractStatus) onContractStatus();
        else if (this == Cost) onCost();
        else if (this == CreationStage) onCreationStage();
        else if (this == CreativeChannel) onCreativeChannel();
        else if (this == CreativeNeeded) onCreativeNeeded();
        else if (this == CreativeNeeds) onCreativeNeeds();
        else if (this == DataSensitivity) onDataSensitivity();
        else if (this == DealSize) onDealSize();
        else if (this == DeliveryAppt) onDeliveryAppt();
        else if (this == DeliveryApptDate) onDeliveryApptDate();
        else if (this == Department) onDepartment();
        else if (this == DepartmentResponsible) onDepartmentResponsible();
        else if (this == DesignRequestNeeded) onDesignRequestNeeded();
        else if (this == DesignRequestType) onDesignRequestType();
        else if (this == DiscussionCategory) onDiscussionCategory();
        else if (this == DoThisTask) onDoThisTask();
        else if (this == EditorialContentStatus) onEditorialContentStatus();
        else if (this == EditorialContentTag) onEditorialContentTag();
        else if (this == EditorialContentType) onEditorialContentType();
        else if (this == Effort) onEffort();
        else if (this == EffortLevel) onEffortLevel();
        else if (this == EstCompletionDate) onEstCompletionDate();
        else if (this == EstimatedTime) onEstimatedTime();
        else if (this == EstimatedValue) onEstimatedValue();
        else if (this == ExpectedCost) onExpectedCost();
        else if (this == ExternalStepsNeeded) onExternalStepsNeeded();
        else if (this == FavoriteIdea) onFavoriteIdea();
        else if (this == FeedbackType) onFeedbackType();
        else if (this == Financial) onFinancial();
        else if (this == FundingAmount) onFundingAmount();
        else if (this == GrantApplicationProcess) onGrantApplicationProcess();
        else if (this == HiringCandidateStatus) onHiringCandidateStatus();
        else if (this == IdeaStatus) onIdeaStatus();
        else if (this == IdsLink) onIdsLink();
        else if (this == IdsPatientLink) onIdsPatientLink();
        else if (this == ImplementationStage) onImplementationStage();
        else if (this == Insurance) onInsurance();
        else if (this == InterviewArea) onInterviewArea();
        else if (this == InterviewQuestionScore) onInterviewQuestionScore();
        else if (this == IteroScanLink) onIteroScanLink();
        else if (this == JobSAppliedTo) onJobSAppliedTo();
        else if (this == Lab) onLab();
        else if (this == LaunchStatus) onLaunchStatus();
        else if (this == LeadStatus) onLeadStatus();
        else if (this == LocalizationLanguage) onLocalizationLanguage();
        else if (this == LocalizationMarketTeam) onLocalizationMarketTeam();
        else if (this == LocalizationStatus) onLocalizationStatus();
        else if (this == MeetingMinutes) onMeetingMinutes();
        else if (this == MeetingNeeded) onMeetingNeeded();
        else if (this == Minutes) onMinutes();
        else if (this == Mrr) onMrr();
        else if (this == MustLocalize) onMustLocalize();
        else if (this == NameOfFoundation) onNameOfFoundation();
        else if (this == NeedToFollowUp) onNeedToFollowUp();
        else if (this == NextAppointment) onNextAppointment();
        else if (this == NextStepsSales) onNextStepsSales();
        else if (this == NumPeople) onNumPeople();
        else if (this == NumberOfUserReports) onNumberOfUserReports();
        else if (this == OfficeLocation) onOfficeLocation();
        else if (this == OnboardingActivity) onOnboardingActivity();
        else if (this == Owner) onOwner();
        else if (this == ParticipantsNeeded) onParticipantsNeeded();
        else if (this == PatientDateOfBirth) onPatientDateOfBirth();
        else if (this == PatientEmail) onPatientEmail();
        else if (this == PatientPhone) onPatientPhone();
        else if (this == PatientStatus) onPatientStatus();
        else if (this == PhoneNumber) onPhoneNumber();
        else if (this == PlanningCategory) onPlanningCategory();
        else if (this == PointOfContact) onPointOfContact();
        else if (this == Position) onPosition();
        else if (this == PostFormat) onPostFormat();
        else if (this == Prescription) onPrescription();
        else if (this == Priority) onPriority();
        else if (this == PriorityLevel) onPriorityLevel();
        else if (this == Product) onProduct();
        else if (this == ProductStage) onProductStage();
        else if (this == Progress) onProgress();
        else if (this == ProjectSize) onProjectSize();
        else if (this == ProjectStatus) onProjectStatus();
        else if (this == ProposedBudget) onProposedBudget();
        else if (this == PublishStatus) onPublishStatus();
        else if (this == ReasonForScan) onReasonForScan();
        else if (this == Referral) onReferral();
        else if (this == RequestType) onRequestType();
        else if (this == ResearchStatus) onResearchStatus();
        else if (this == ResponsibleDepartment) onResponsibleDepartment();
        else if (this == ResponsibleTeam) onResponsibleTeam();
        else if (this == RiskAssessmentStatus) onRiskAssessmentStatus();
        else if (this == RoomName) onRoomName();
        else if (this == SalesCounterpart) onSalesCounterpart();
        else if (this == Sentiment) onSentiment();
        else if (this == ShippingLink) onShippingLink();
        else if (this == SocialChannels) onSocialChannels();
        else if (this == Stage) onStage();
        else if (this == Status) onStatus();
        else if (this == StatusDesign) onStatusDesign();
        else if (this == StatusOfInitiative) onStatusOfInitiative();
        else if (this == SystemSetup) onSystemSetup();
        else if (this == TaskProgress) onTaskProgress();
        else if (this == Team) onTeam();
        else if (this == TeamMarketing) onTeamMarketing();
        else if (this == TeamResponsible) onTeamResponsible();
        else if (this == TimeItTakesToCompleteTasks) onTimeItTakesToCompleteTasks();
        else if (this == Timeframe) onTimeframe();
        else if (this == TreatmentType) onTreatmentType();
        else if (this == TypeWorkRequestsIt) onTypeWorkRequestsIt();
        else if (this == UseAgency) onUseAgency();
        else if (this == UserName) onUserName();
        else if (this == VendorCategory) onVendorCategory();
        else if (this == VendorType) onVendorType();
        else if (this == WordCount) onWordCount();
        else otherwise(Value);
    }
}
